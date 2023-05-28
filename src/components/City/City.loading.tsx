import ContentLoader from "react-content-loader";

const CityLoading = () => {
  return (
    <ContentLoader
      speed={2}
      width={360}
      height={400}
      viewBox="0 0 360 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="6" rx="3" ry="3" width="153" height="30" />
      <rect x="135" y="90" rx="3" ry="3" width="70" height="70" />
      <rect x="210" y="90" rx="3" ry="3" width="30" height="25" />
      <rect x="0" y="210" rx="3" ry="3" width="103" height="20" />
      <rect x="0" y="250" rx="3" ry="3" width="134" height="10" />
      <rect x="330" y="250" rx="3" ry="3" width="27" height="10" />
      <rect x="0" y="270" rx="3" ry="3" width="134" height="10" />
      <rect x="330" y="270" rx="3" ry="3" width="27" height="10" />
      <rect x="0" y="290" rx="3" ry="3" width="134" height="10" />
      <rect x="330" y="290" rx="3" ry="3" width="27" height="10" />
    </ContentLoader>
  );
};

export default CityLoading;
