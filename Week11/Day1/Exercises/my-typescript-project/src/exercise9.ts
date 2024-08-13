function getAction(role: string): string {
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