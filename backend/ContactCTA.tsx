// const handleSubmit = async () => {
//   await fetch('http://localhost:5000/api/contact', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: 'Yamna',
//       email: 'yamna@example.com',
//       message: 'This is a test message',
//     }),
//   });
// };

// export default function ContactCTA() {
//   return (
//     <button onClick={handleSubmit}>
//       Submit
//     </button>
//   );
// }


const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Yamna',
        email: 'yamna@example.com',
        company: 'Test Company',
        phone: '1234567890',
        message: 'This is a test message',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server Error:', errorData);
      alert('Failed to send message.');
      return;
    }

    const data = await response.json();
    console.log('Success:', data);
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Network error:', error);
    alert('Something went wrong.');
  }
};

export default function ContactCTA() {
  return (
    <button
      onClick={handleSubmit}
      className="bg-Blue text-white px-4 py-2 rounded hover:bg-Blue"
    >
      Submit
    </button>
  );
}
