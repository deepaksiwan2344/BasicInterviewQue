import  useOnlineStatus  from './useOnlineStatus';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1 style={{marginTop: "4rem"}}>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
function SaveButton() {
  const isOnline = useOnlineStatus();
  return (
     <>
      <div style={{marginTop: "3rem"}}>
      <button style={{
        backgroundColor: isOnline ? 'green' : 'gray',
        padding: "2rem 3rem",
        width: "20rem",
        height: "2rem",
        textAlign: "center",
        border: "1px solid red",
        borderRadius: "5px",
        color: 'white',
        cursor: isOnline ? 'pointer' : 'not-allowed',
      }} disabled={!isOnline}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
      </div>
     </>
  );
}

export default function OnlineOffline() {
  return (
    <>
      <SaveButton  />
      <StatusBar />
    </>
  );
}