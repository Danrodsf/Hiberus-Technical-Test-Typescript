import { IerrorMsg } from "../interfaces/interfaces";

const ErrorMsg = ({ errorMsg }: { errorMsg: IerrorMsg }) => {
  return (
    <>
      {errorMsg.success !== "" ? (
        <h5 className='text-success'>{errorMsg.success}</h5>
      ) : (
        <h5 className='text-danger'>{errorMsg.error}</h5>
      )}
    </>
  );
};

export default ErrorMsg;
