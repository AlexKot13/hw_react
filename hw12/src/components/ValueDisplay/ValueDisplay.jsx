import { use, useEffect, useRef } from "react";

function ValueDisplay({ value }) {
  const previousValueRef = useRef('')

  useEffect(() => {
    previousValueRef.current = value
  }, [value])

  return (
    <div>
      <p><strong>Current Value:</strong>{value}</p>
      <p><strong>Previous Value:</strong>{previousValueRef.current}</p>
    </div>
  )
}

export default ValueDisplay;