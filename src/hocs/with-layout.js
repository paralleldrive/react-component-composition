import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="landing-page-footer-wrapper font-format">
        <div className="footer-content">
          <div className="icon-wrapper">
            <a href="https://devanywhere.io/" className="link icon">
              <Image
                height={20}
                width={120}
                src="/devanywhere-logo.png"
                alt="DevAnywhere Logo"
              />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .landing-page-footer-wrapper {
          position: absolute;
          height: 75px;
          background-color: white;
          width: 100%;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-content {
          padding: 30px;
        }

        .link {
          margin-bottom: 8px;
          text-decoration: none;
          font-size: 18px;
          font-weight: 400;
          color: inherit;
          cursor: pointer;
          outline: none;
        }

        .link.--block {
          display: block;
        }

        .icon-wrapper {
          margin-top: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .link.icon {
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export const BorderDecorations = () => {
  return (
    <>
      <div className="header-decoration">
        <div className="line"></div>
      </div>
      <div className="footer-decoration">
        <div className="line"></div>
      </div>
      <style jsx>{`
        .header-decoration {
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 100;
        }
        .footer-decoration {
          position: fixed;
          width: 100%;
          bottom: 0;
          z-index: 100;
        }
        .line {
          height: 3px;
          background-color: #a3d12b;
        }
      `}</style>
    </>
  );
};

const withLayout =
  ({ showBorderDecorations = false, showFooter = true }) =>
  (Component) => {
    return function WithLayout(props) {
      return (
        <>
          {showBorderDecorations && <BorderDecorations />}
          <Component {...props} />
          {showFooter && <Footer />}
        </>
      );
    };
  };

export default withLayout;
