/*
 * @Author: bin.zou
 * @Date: 2021-05-27 09:24:30
 * @LastEditors: ruixin
 * @LastEditTime: 2021-06-08 14:47:40
 * @Description: file content
 */
export const formatData = data => {
  return {
    ...data,
    list: data.records.map((item, index) => {
      return {
        id: index,
        ...item
      };
    })
  };
};
