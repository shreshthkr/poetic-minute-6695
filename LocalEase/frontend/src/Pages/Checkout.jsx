import React from "react";
import styles from "./Checkout.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.payment}>
        <div className={styles.options}>
          <h2>Payment Options</h2>
        </div>
        <div className={styles.main}>
          <div className={styles.method}>
            <div>
              <p>Paytm</p>
              <p>
                <MdKeyboardArrowRight />
              </p>
            </div>
            <div>
              <p>Credit Cards</p>
              <p>
                <MdKeyboardArrowRight />
              </p>
            </div>
            <div>
              <p>Debit Cards</p>
              <p>
                <MdKeyboardArrowRight />
              </p>
            </div>
            <div>
              <p>Net Banking</p>
              <p>
                <MdKeyboardArrowRight />
              </p>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.forma}>
              <div>
                <div className={styles.select}>
                  <p>Select a wallet</p>
                </div>
                <div className={styles.ima}>
                  <div>
                    <img
                      src="https://res4.nbstatic.in/static/images/paytm-wallet.svg"
                      alt="paytm"
                    />
                  </div>
                </div>
                <div className={styles.pay}>
                  <button onClick={onOpen}>PAY NOW</button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Payment Successful</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <img
                          src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif"
                          alt="payment done"
                        />
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          colorScheme="blue"
                          mr={3}
                          onClick={handleNavigate}
                          href="/"
                        >
                          Continue
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//https://res4.nbstatic.in/static/images/paytm-wallet.svg
