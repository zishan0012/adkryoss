// import { useState } from "react";

// export default function FixedCTA() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Fixed Button */}
//       <div
//         onClick={() => setOpen(true)}
//         className="fixed right-5 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-right bg-orange-400 text-white px-6 py-3 font-semibold cursor-pointer z-50 rounded-t-lg"
        
//       >
//         Let's Connect
//       </div>

//       {/* Form Panel */}
//       <div
//         className={`fixed top-1/2 -translate-y-1/2 right-0 w-[350px] bg-white shadow-2xl transition-all duration-300 z-50 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="bg-yellow-400 p-4 flex justify-between items-center font-bold">
//           Leave a Message
//           <button onClick={() => setOpen(false)}>✕</button>
//         </div>

//         <form className="p-6 flex flex-col gap-4">
//           <input className="border p-2 rounded" placeholder="Name" />
//           <input className="border p-2 rounded" placeholder="Email" />
//           <input className="border p-2 rounded" placeholder="Phone Number" />
//           <input className="border p-2 rounded" placeholder="Website URL" />
//           <textarea className="border p-2 rounded" placeholder="Message here..." />
//           <button className="bg-blue-600 text-white py-2 rounded-full">
//             SEND
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }






















import { useState } from "react";
import emailjs from "@emailjs/browser";
 
export default function FixedCTA() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
 
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
 
  const validate = () => {
    let newErrors = {};
 
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
 
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
 
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }
 
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.placeholder.split(" ")[0].toLowerCase()]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!validate()) return;
 
    emailjs
      .send(
        "service_8r41dff",
        "template_y39nc0i",
        formData,
        "2X4j1gjI4qCBNp-1j"
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        });
        setErrors({});
      })
      .catch(() => {
        setSuccess("Failed to send message. Try again.");
      });
  };
 
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="fixed right-5 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-right bg-orange-400 text-white px-6 py-3 font-semibold cursor-pointer z-50 rounded-t-lg"
      >
        Let's Connect
      </div>
 
      <div
        className={`fixed top-1/2 -translate-y-1/2 right-0 w-[350px] bg-white shadow-2xl transition-all duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-yellow-400 p-4 flex justify-between items-center font-bold">
          Leave a Message
          <button onClick={() => setOpen(false)}>✕</button>
        </div>
 
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div>
            <input
              className="border p-2 rounded w-full"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
 
          <div>
            <input
              className="border p-2 rounded w-full"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
 
          <div>
            <input
              className="border p-2 rounded w-full"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
 
          <input
            className="border p-2 rounded"
            placeholder="Website URL"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
          />
 
          <div>
            <textarea
              className="border p-2 rounded w-full"
              placeholder="Message here..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
 
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-full"
          >
            SEND
          </button>
 
          {success && (
            <p className="text-green-600 text-sm text-center">{success}</p>
          )}
        </form>
      </div>
    </>
  );
}