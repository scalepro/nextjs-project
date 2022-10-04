import Toast from '@/components/app/Toast';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Toast
      type="success"
      title="Cartão salvo com sucesso"
      toast={null}
      id={0}
    />
  );
}
