import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

import styles from "./emojiPicker.module.scss"

export default function EmojiPickerInput() {
    const refInput = useRef(null);

    return (
        <div className={styles.emojiPickerInputPadre}>
            <input  className={styles.emojiPickerInput} ref={refInput} />
            <EmojiPicker ref={refInput} />
        </div>
    )
}