const Footer = () => {
  return (
    <footer>
      <div className="h-80 text-twhite w-full flex flex-col justify-end items-center mt-4">
        <p>John Doe</p>
        <p>johndoe@example.com - 123-456-7890</p>
        <p>123 Main Street, City, State, ZIP</p>
        <div className="w-full mt-14 border-t-2"></div>
        <div className="w-full mt-2 text-center">© Made by Céline</div>
        <div className="flex flex-row justify-center mb-2">
          <a href="https://github.com/ocsiddisco/MakeUpArtist2023">
            <img src="github-100.png" alt="github" width="60px" height="60px" />
          </a>
          <a href="https://www.linkedin.com/in/celinelecorvaisier/">
            <img
              src="linkedin-100.png"
              alt="linkedin"
              width="60px"
              height="60px"
            />
          </a>
          <a href="mailto:celine.le.corv@gmail.com">
            <img src="email-100.png" alt="email" width="60px" height="60px" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
