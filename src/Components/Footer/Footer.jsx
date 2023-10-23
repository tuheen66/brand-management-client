

const Footer = () => {
  return (
    <footer className=" footer p-10  border">
      <aside>
        <img className="w-16 rounded-full" src="https://i.ibb.co/pwYJkw4/logo.png" alt="" />
        <p><span className="text-3xl font-bold">Elysian Motorway</span><br />Providing your dream cars since 1992</p>
      </aside>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
      <nav className="flex flex-col mt-4">
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="flex flex-col mt-4">
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="flex flex-col mt-4">
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      </div>
    </footer>
  );
};

export default Footer;