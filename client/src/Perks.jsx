import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Perks({ selected, onChange }) {

  function handleCbClick(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange(selected.filter(item => item !== name));
    }
  }

  const perks = [
    { name: "wifi", icon: "fa-wifi" },
    { name: "tv", icon: "fa-tv" },
    { name: "ac", icon: "fa-fan" },
    { name: "elevator", icon: "fa-building" },
    { name: "pool", icon: "fa-swimming-pool" },
  ];

  return (
    <>
      {perks.map((perk, i) => (
        <label key={i} className="border flex p-4 items-center rounded-2xl gap-2 cursor-pointer">
          <input type="checkbox" checked={selected.includes(perk.name)} onChange={handleCbClick} name={perk.name} />
          <FontAwesomeIcon icon={perk.icon} />
          <span>{perk.name}</span>
        </label>
      ))}
    </>
  );
}