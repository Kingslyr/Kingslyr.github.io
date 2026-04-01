export default function Contact() {
  return (
    <form action="https://formspree.io/f/mzdkbpep" method="POST">
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Project Description" />
      <button type="submit">Send</button>
    </form>
  );
}
