function getAction(role) {
    switch (role) {
        case "admin":
            return "Manage users";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        default:
            return "No action available";
    }
}
