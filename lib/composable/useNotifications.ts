import { ElMessage } from "element-plus";
import type { IElMessage } from "./interfaces/types";

/**
 * Notification message
 * @param elMessageData
 */
export const elMessage = (elMessageData: IElMessage) => {
  ElMessage(elMessageData);
};
