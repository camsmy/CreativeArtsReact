import Button from 'react-bootstrap/Button';
function PrimaryButton({ name }) {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary fw-bold text-uppercase" size="lg">
        {name}
      </Button>
    </div>
  )
}

export default PrimaryButton