const Contacts = () => {
  return (
    <div>
      <h1 className="text-center mt-3 mb-4 text-primary">Связаться со мной?</h1>
      <div className="row">
        <div className="col-4">
          <h3 className="text-center">Мой личный телефон</h3>
          <p className="text-center">+996 709 807 359</p>
          <h3 className="text-center">Мой рабочий телефон</h3>
          <p className="text-center">+996 999 312 312</p>
        </div>
        <div className="col-8">
          <h3 className="text-center">Мой Адрес</h3>
          <p className="text-center">с.Таш-Дебе. ул.Школьная 12К</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center fs-2 mt-4 fw-bold">
          Если хотите со мной связаться, можете написать мне на почту: madzitaliev51@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Contacts;
