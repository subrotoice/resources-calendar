const Footer = () => {
  return (
    <div>
      <footer className="py-0 px-0 xl:max-w-auto xl:mx-auto fixed flex bottom-0 w-full bg-white">
        <div className="flex w-auto border-t-0 px-0">
          <div className="flex py-1 items-center w-auto text-sm">
            <b>
              © 2025
              <a href="http://doict.gov.bd/" target="_blank">
                তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর
              </a>
              ,
            </b>
            &nbsp;
            <a
              href="https://ictd.gov.bd/"
              target="_blank"
              className="text-blue-600"
            >
              তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
