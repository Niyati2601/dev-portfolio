module {
  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Nat;
  };

  public type SubmitContactRequest = {
    name : Text;
    email : Text;
    message : Text;
  };

  public type SubmitContactResult = Result;

  public type Result = {
    #ok : Text;
    #err : Text;
  };
};
