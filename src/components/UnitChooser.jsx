// IMAGES
import Chevron from "@images/chevron.svg";
// STYLES
import "@style/unitChooser.scss";

const UnitChooser = ({ modal, showModal, unit, setUnit, chosenUnit }) => {
  return (
    <div id="unitChooserContainer">
      <div className="unitDisplay">
        <p>Chose a unit</p>
        <img
          src={Chevron}
          alt="select"
          onClick={(event) => {
            event.stopPropagation();
            showModal(!modal);
          }}
        />
        <p>Chosen unit: {chosenUnit}</p>
      </div>
      <div id="unitChooserModal" className={modal ? "shown" : "hidden"}>
        <ul>
          {unit.map((unit) => (
            <li
              key={crypto.randomUUID()}
              onClick={() => {
                showModal(false);
                setUnit(unit);
              }}
            >
              {unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UnitChooser;
