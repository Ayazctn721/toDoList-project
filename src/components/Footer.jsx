function Footer({ taskCount, setFilter, clearCompleted }) {
    return (
        <footer className="container mx-auto mt-0 d-flex justify-content-center flex-column align-items-center">
            <div className="footer d-flex justify-content-between bg-white w-75 px-2">
                <div className="d-flex align-items-center my-2 fs-7 text-success">
                    {taskCount} tasks left
                </div>
                <div className="my-2 d-flex justify-content-between">
                    <button onClick={() => setFilter("all")} className="btn btn-sm text-success">All</button>
                    <button onClick={() => setFilter("active")} className="btn btn-sm text-success">Active</button>
                    <button onClick={() => setFilter("completed")} className="btn btn-sm text-success">Completed</button>
                </div>
                <div className="my-2">
                    <button onClick={clearCompleted} className="btn btn-sm text-success">Clear Completed</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
