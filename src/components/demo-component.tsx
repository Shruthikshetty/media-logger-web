'use client';
/**
 * This is a demo component
 */

const DemoComponent = ({
  header = 'This is a demo component',
  onClick,
}: {
  header: string;
  onClick: () => void;
}) => {
  return (
    <div>
      <p>{header}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default DemoComponent;
