const Spinner = ({ text }: { text: string }) => {
  return (
    <div>
      <div className='spinner-border text-primary'>
        <span className='visually-hidden'>Loading...</span>
      </div>
      <h2 className='text-primary'>{text}</h2>
    </div>
  );
};

export default Spinner;
