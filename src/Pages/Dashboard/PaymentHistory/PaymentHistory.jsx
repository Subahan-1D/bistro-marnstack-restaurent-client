import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/payments/${user.email}`)
        return res.data ;
    },
  });
  return (
    <div className="border p-8">
      <h2 className="text-3xl text-orange-800 text-bold mb-5">
        Total Payment : {payments.length}
      </h2>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl font-lato text-bold text-black">
              <th>#</th>
              <th>Total Price</th>
              <th>TransactionId</th>
              <th>Status</th>
              <th>Payment Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{payment.price}</div>
                    </div>
                  </div>
                </td>
                <td>{payment.transitionId}</td>
                <td>{payment.status}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
