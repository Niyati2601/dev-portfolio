import Types "../types/contact";
import List "mo:core/List";

module {
  public func validate(req : Types.SubmitContactRequest) : ?Text {
    if (req.name.size() == 0) return ?"Name is required";
    if (req.email.size() == 0) return ?"Email is required";
    if (not req.email.contains(#char '@')) return ?"Email must be valid";
    if (req.message.size() == 0) return ?"Message is required";
    null;
  };

  public func submit(
    submissions : List.List<Types.ContactSubmission>,
    nextId : Nat,
    req : Types.SubmitContactRequest,
    timestamp : Nat,
  ) : (Types.ContactSubmission, Nat) {
    let submission : Types.ContactSubmission = {
      id = nextId;
      name = req.name;
      email = req.email;
      message = req.message;
      timestamp = timestamp;
    };
    submissions.add(submission);
    (submission, nextId + 1);
  };

  public func listAll(
    submissions : List.List<Types.ContactSubmission>
  ) : [Types.ContactSubmission] {
    submissions.toArray();
  };
};
