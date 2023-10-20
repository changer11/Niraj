export default function Alert(probs) {
    
  return (
    probs.alert && <div class={`alert alert-${probs.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{probs.alert.type}</strong> {probs.alert.msg}
  </div>
  );
};
