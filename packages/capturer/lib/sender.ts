interface data {
  type: string,
  data: object,
}

type send = (data: data) => void;

export {
  send,
  data,
}