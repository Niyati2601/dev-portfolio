import Types "../types/contact";
import ContactLib "../lib/contact";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (
  submissions : List.List<Types.ContactSubmission>,
  nextId : [var Nat],
) {
  public shared func submitContact(
    name : Text,
    email : Text,
    message : Text,
  ) : async Types.Result {
    let req : Types.SubmitContactRequest = { name; email; message };
    switch (ContactLib.validate(req)) {
      case (?err) { #err(err) };
      case null {
        let timestamp = Time.now().toNat();
        let (_, newId) = ContactLib.submit(submissions, nextId[0], req, timestamp);
        nextId[0] := newId;
        #ok("Contact submission received successfully");
      };
    };
  };

  public query func getContacts() : async [Types.ContactSubmission] {
    ContactLib.listAll(submissions);
  };
};
