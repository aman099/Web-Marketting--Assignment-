import "./SignUp.scss";
import Button from "../main-card/Button";

function SignUp({ loading }) {
  return (
    <div className={`signup center ${loading ? "signupSkeleton" : ""}`}>
      <div
        className={`flex signup-container ${
          loading ? "signupSkeleton-container" : ""
        }`}
      >
        <h4>Sign up and get exclusive special details</h4>
        <form
          className={`flex form ${loading ? "formSkeleton" : ""}`}
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="email" />
          <Button
            classNameBtn={`btn btn-view ${loading ? "signUpSkeletonBtn" : ""}`}
            classNameContainer={`btn-blue mtop-0 ${
              loading ? "signUpSkeletonCont" : ""
            }`}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
