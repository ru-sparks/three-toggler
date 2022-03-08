import useToggle from "./useToggle";

const HookToggleUseToggle = (props) => {
  let [smile, setSmile] = useToggle();
  return (
    <p className="toggle" onClick={() => setSmile(!smile)}>
      {smile ? props.on : props.off}
    </p>
  );
};

export default HookToggleUseToggle;
