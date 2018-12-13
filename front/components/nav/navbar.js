import {
  Menu
} from "grommet";

const Navbar = () => (
  <div>
    <Menu
      label="Actions"
      items={[
        { label: "Launch", onClick: () => { } },
        { label: "Abort", onClick: () => { } }
      ]}
    />
  </div>
)

export default Navbar;