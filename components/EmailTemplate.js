export const EmailTemplate = ({ fullName, email, phone, message }) => {
    return (
      <div>
        <h1>New Contact Request</h1>
        <p><strong>Name:</strong> {fullName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Message:</strong> {message}</p>
      </div>
    );
  };
  