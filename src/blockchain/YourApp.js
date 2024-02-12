import {
  useConnectModal,
} from '@rainbow-me/rainbowkit';

const YourApp = ({ classes, style }) => {
  const { openConnectModal } = useConnectModal();
  return (
    <>
      {/* {openConnectModal && ( */}
      {/* <button onClick={openConnectModal} style={style}  className={classes} type="button">
            Connect Now
          </button> */}
      <a href="https://user.groways.io">
      {/* <a href="#"> */}
        <button style={style} className={classes} type="button">
          Connect Now
        </button>
      </a>

      {/* )} */}
    </>
  );
};

export default YourApp