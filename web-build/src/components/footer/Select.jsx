function Select({ data }) {
  const { title, menu_1, menu_2, menu_3, menu_4, menu_5 } = data;

  return (
    <div className="options">
      <select name="" id="">
        <option value="">{title}</option>
        <option value="">{menu_1}</option>
        <option value="">{menu_2}</option>
        <option value="">{menu_3}</option>
        <option value="">{menu_4}</option>
        <option value="">{menu_5}</option>
      </select>
    </div>
  );
}

export default Select;
