type ContainerProps = { children: React.ReactNode };

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="px-6 sm:px-12 lg:px-20">{children}</div>;
};

export default Container;
