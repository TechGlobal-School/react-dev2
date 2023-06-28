const Content = ({ contentText }) => {
  // componentDidMount - not available - useEffect
  return (
    <main>
      <h1>{contentText}</h1>
    </main>
  );
};

// eslint, typescript job
// Content.propTypes = {
//   contentText: propTypes.string,
// };
// default prop
Content.defaultProps = {
  contentText: "Content X",
};
export default Content;
