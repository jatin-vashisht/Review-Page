const Container = ({mainHeading, subHeading, children}) => {
  return (
    <div>
      <h2 className="text-xl text-gray-700 font-bold">{mainHeading}</h2>
      <h3 className="text-sm text-gray-400 pt-2 pb-4">
        {subHeading}
      </h3>
      {children}
      <div className="border-b border-dashed border-gray-200 pt-4" />
    </div>
  );
};

export default Container;
