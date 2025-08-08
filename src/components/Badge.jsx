import clsx from 'clsx';

function Badge({ status }) {
  const styles = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Approved: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800',
    Open: 'bg-green-100 text-green-800',
    Closed: 'bg-red-100 text-red-800',
  };

  return (
    <span className={clsx('px-2 py-1 rounded-full text-xs font-medium', styles[status])}>
      {status}
    </span>
  );
}

export default Badge;