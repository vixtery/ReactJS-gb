function InfoList({ info }) {
    return (
      <div className="info">
        <p className="info_text">
          Информация о собаках.
        </p>
        <ul className="info_list">
          {info
            ? info.map((el, index) => (
                <li key={index} className="info_item">
                  <p className="info_dog">
                    Dog: {el.dog}
                  </p>
                  <p className="info_character">
                    Character: {el.character}
                  </p>
                  <p className="info_info">
                    Info: {el.info}
                  </p>
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
  
  export default InfoList;