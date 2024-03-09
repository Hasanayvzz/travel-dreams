import { useContext, useState, useRef } from "react";
import Link from "next/link";
// import { useIsVisible } from "react-is-visible";
import { Card, Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import DarkLogo from "../../../public/img/token/dark-logo.svg";
import AuthContext from "../../contexts/AuthContext";
import { ApiRequest } from "../../pages/api";

const HeaderButton = ({
  setTrigger,
  trigger,
  campaingName,
  campaignStatus,
}: any) => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { id }: any = router.query;
  const [MobileMenu, setMobilemenu] = useState(false);
  const navRef = useRef(null);

  //   const isVisible = useIsVisible(navRef);
  const [showApproveModal, setShowApproveModal] = useState<boolean>(false);
  const [showRejectModal, setShowRejectModal] = useState<boolean>(false);
  const handleApproveModalOpen = () => {
    setShowApproveModal(true);
  };
  const handleApproveModalClose = () => {
    setShowApproveModal(false);
  };
  const handleRejectModalOpen = () => {
    setShowRejectModal(true);
  };
  const handleRejectModalClose = () => {
    setShowRejectModal(false);
  };

  const isVisible = true;
  return (
    <>
      <header ref={navRef}>
        <div
          className={`header-area header-defult header_style__three bg-body ${
            isVisible ? "sticky" : "sticky"
          } `}>
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="col-xl-2 col-2 col-lg-3 col-md-2 col-2 align-items-center d-flex order-0">
                <div className="nav-logo  d-flex justify-content-between align-items-center">
                  <Link href="/">
                    <img src={DarkLogo.src} alt="logo" />
                  </Link>
                </div>
              </div>
              <span> {campaingName} </span>
              {campaignStatus === "Pending" && (
                <nav
                  className={`main-navv mr-2 ${
                    MobileMenu ? "slidenav" : ""
                  } d-flex align-items-center justify-content-end`}>
                  <ul
                    className="d-flex gap-3 align-items-center py-4"
                    style={{ listStyle: "none" }}>
                    <li>
                      <button
                        className="approve-btn w-100 gap-2"
                        onClick={() => handleApproveModalOpen()}>
                        {t("button.approve")}{" "}
                        <img src="/img/verify/ok.svg" alt="" />
                      </button>
                    </li>
                    <li>
                      <button
                        className="reject-btn w-100 gap-2"
                        onClick={() => handleRejectModalOpen()}>
                        {t("button.reject")}{" "}
                        <img src="/img/verify/cross.svg" alt="" />
                      </button>
                    </li>

                    <li>
                      <div className="exit-preview">
                        <Link href="/launchpad">
                          <button className="btn button-card  button-white  d-flex align-items-center justify-content-center gap-2 px-3">
                            <span className="green-color">
                              {t("button.back")}
                            </span>
                          </button>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
          <Modal
            show={showApproveModal}
            onHide={handleApproveModalClose}
            style={{ zIndex: "9999" }}
            centered>
            <Modal.Header closeButton style={{ border: "0px" }}>
              <p className="">{t("approveProject")}</p>
            </Modal.Header>

            <Modal.Body>
              <div className="modal-text">{t("approveProjectInfo")}</div>
            </Modal.Body>

            <Modal.Footer
              style={{ border: "0px", padding: 10 }}
              className="justify-content-center">
              <div className="action-button-box w-100">
                {/* <button
                  className="approve-btn w-100 gap-2"
                  onClick={() => handleApproveProject(id)}>
                  {t("button.approve")}{" "}
                </button> */}

                <div className="action-button reject w-50 d-flex align-items-center">
                  <div
                    onClick={() => {
                      handleApproveModalClose();
                    }}
                    className="div c-pointer d-flex justify-content-center">
                    <div className="text-wrapper">{t("button.cancel")}</div>
                  </div>
                </div>
              </div>
            </Modal.Footer>
          </Modal>
          <Modal
            show={showRejectModal}
            onHide={handleRejectModalClose}
            style={{ zIndex: "9999" }}
            centered>
            <Modal.Header closeButton style={{ border: "0px" }}>
              <p className="">{t("rejectProject")}</p>
            </Modal.Header>

            <Modal.Body>
              <div className="modal-text">{t("rejectProjectInfo")}</div>
            </Modal.Body>

            <Modal.Footer
              style={{ border: "0px", padding: 10 }}
              className="justify-content-center">
              <div className="action-button-box w-100">
                {/* <button
                  className="approve-btn w-100 gap-2"
                  onClick={() => handleRejectProject(id)}>
                  {t("button.reject")}
                </button> */}

                <div className="action-button reject w-50 d-flex align-items-center">
                  <div
                    onClick={() => {
                      handleRejectModalClose();
                    }}
                    className="div c-pointer d-flex justify-content-center">
                    <div className="text-wrapper">{t("button.cancel")}</div>
                  </div>
                </div>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </header>
    </>
  );
};

export default HeaderButton;
