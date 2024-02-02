import {
    useConnectModal,
  } from '@rainbow-me/rainbowkit';
  
  const YourApp = ({classes,style}) => {
    const { openConnectModal } = useConnectModal();
    return (
      <>
        {openConnectModal && (
          <button onClick={openConnectModal} style={style}  className={classes} type="button">
            Connect Now
          </button>
        )}
      </>
    );
  };
  
  export default YourApp