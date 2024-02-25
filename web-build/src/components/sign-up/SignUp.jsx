import "./SignUp.scss";
import Button from "../main-card/Button";

function SignUp() {
  return (
    <div className="signup center">
      <div className="flex signup-container">
        <h4>Sign up and get exclusive special details</h4>
        <form className="flex form" action="">
          <input type="email" />
          <Button
            classNameBtn="btn btn-view"
            classNameContainer="btn-blue mtop-0"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
