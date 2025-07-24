const handleSubmit = async () => {
  await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Yamna',
      email: 'yamna@example.com',
      message: 'This is a test message',
    }),
  });
};

export default function ContactCTA() {
  return (
    <button onClick={handleSubmit}>
      Submit
    </button>
  );
}
