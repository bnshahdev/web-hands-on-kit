import { useState } from "react";

const Section = ({ title, description, isVisible, setVisible }) => {
  return (
    <div onClick={() => setVisible()}>
      <h1>{title}</h1>
      {isVisible && <h4>{description}</h4>}
    </div>
  );
};
export const About = () => {
  const [visibleKey, setVisibleKey] = useState("");
  return (
    <>
      <Section
        setVisible={() => {
          visibleKey === "who" ? setVisibleKey("") : setVisibleKey("who");
        }}
        isVisible={visibleKey === "who"}
        title={"Who are we?"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, metus tristique facilisis molestie, augue magna condimentum libero, ut tincidunt tortor erat eget nisl. Donec consectetur quam quis turpis dictum, at lacinia leo vulputate. In ultricies elit eget justo vulputate, id mollis diam gravida. Curabitur pharetra tristique quam. Vivamus id convallis erat. Integer nec augue suscipit augue dictum mollis. Nam ipsum justo, congue congue ex sollicitudin, scelerisque mattis sem. Phasellus dignissim velit in metus viverra, eu pulvinar tortor tristique. Integer ornare diam id eros suscipit, in vehicula velit facilisis. Aenean dictum ac elit vitae ultrices. Fusce eget est non dolor pulvinar sollicitudin id eu leo."
      />
      <Section
        setVisible={() => {
          visibleKey === "what" ? setVisibleKey("") : setVisibleKey("what");
        }}
        isVisible={visibleKey === "what"}
        title={"What we do?"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, metus tristique facilisis molestie, augue magna condimentum libero, ut tincidunt tortor erat eget nisl. Donec consectetur quam quis turpis dictum, at lacinia leo vulputate. In ultricies elit eget justo vulputate, id mollis diam gravida. Curabitur pharetra tristique quam. Vivamus id convallis erat. Integer nec augue suscipit augue dictum mollis. Nam ipsum justo, congue congue ex sollicitudin, scelerisque mattis sem. Phasellus dignissim velit in metus viverra, eu pulvinar tortor tristique. Integer ornare diam id eros suscipit, in vehicula velit facilisis. Aenean dictum ac elit vitae ultrices. Fusce eget est non dolor pulvinar sollicitudin id eu leo."
      />
      <Section
        setVisible={() => {
          visibleKey === "why" ? setVisibleKey("") : setVisibleKey("why");
        }}
        isVisible={visibleKey === "why"}
        title={"Why we?"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, metus tristique facilisis molestie, augue magna condimentum libero, ut tincidunt tortor erat eget nisl. Donec consectetur quam quis turpis dictum, at lacinia leo vulputate. In ultricies elit eget justo vulputate, id mollis diam gravida. Curabitur pharetra tristique quam. Vivamus id convallis erat. Integer nec augue suscipit augue dictum mollis. Nam ipsum justo, congue congue ex sollicitudin, scelerisque mattis sem. Phasellus dignissim velit in metus viverra, eu pulvinar tortor tristique. Integer ornare diam id eros suscipit, in vehicula velit facilisis. Aenean dictum ac elit vitae ultrices. Fusce eget est non dolor pulvinar sollicitudin id eu leo."
      />
    </>
  );
};

export default About;
