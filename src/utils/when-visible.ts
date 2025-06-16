type CallbackFn = () => void;

const whenVisible = (
  $element: Element,
  callback: CallbackFn,
  options?: IntersectionObserverInit
): void => {
  // ...existing code...
};

export default whenVisible;