// The Virtual DOM is a lightweight, in-memory representation
// of the actual DOM  that React uses to optimize the rendering process. Instead of directly manipulating the
// real DOM, React creates a virtual copy of the DOM, updates the virtual DOM when changes occur, and then compares it to the
// previous version using a process called Reconciliation.
// After identifying the differences, it efficiently updates only the parts of the real DOM that changed, minimizing the performance impact.




const VirtualDom = () => {
    return (
      <div>VirtualDom</div>
    )
  }
  
export default VirtualDom