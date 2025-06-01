const Contact = () => {
    return (
        <div className="p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" className="border rounded-lg p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="border rounded-lg p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea className="border rounded-lg p-2 w-full" rows="4"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2">Send</button>
            </form>
        </div>
    )
};

export default Contact;
