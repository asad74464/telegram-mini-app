import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="main d-flex justify-content-center w-100">
      <main className="content d-flex p-0">
        <div className="container d-flex flex-column">
          <div className="row h-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center">
                  <h1 className="display-1 fw-bold text-info">404</h1>
                  <p className="h2">Page Not Found</p>
                  <p className="h4 fw-normal mt-3 mb-4">
                    The page you are looking for does not exist.
                  </p>
                  <button className="btn btn-info btn-lg" onClick={goBack}>
                    back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default NotFound;
