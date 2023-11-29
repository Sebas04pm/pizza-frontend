import imgCabecera from "../../assets/img/home/1-white.png";

export const ImgText = () => {
  return (
		<div className="bg-dark pt-5">
			<section className="seccion2">
      <div className="d-flex justify-content-end w-100">
        <div className="contenido px-5 d-flex flex-column justify-content-center align-items-center">
          <div>
            <img src={imgCabecera} />
          </div>
          <div className="mt-3">
            <p className="fs-1 lh-1 sec2text text-light">EL MEJOR SERVICIO</p>
          </div>
          <div>
            <p className="fs-4 sec2subtext text-light">
              Le brindamos la mejor atención que usted se merece.
            </p>
          </div>
        </div>
      </div>
    </section>
		</div>
  );
};
