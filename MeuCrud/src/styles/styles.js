import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  // ========== CABEÇALHO ==========
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    boxShadow: "0px 2px 3px rgba(0,0,0,0.05)",
    elevation: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#212529",
    letterSpacing: -0.5,
  },
  addButton: {
    backgroundColor: "#4361ee",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    boxShadow: "0px 2px 4px rgba(67,97,238,0.3)",
    elevation: 3,
  },
  addButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },

  // ========== FORMULÁRIO ==========
  formContainer: {
    padding: 24,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 16,
    color: "#495057",
    letterSpacing: 0.3,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#dee2e6",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#ffffff",
    marginBottom: 8,
    transition: "border-color 0.2s",
  },
  inputFocused: {
    borderColor: "#4361ee",
    backgroundColor: "#f8f9ff",
  },
  buttonContainer: {
    marginTop: 32,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#4361ee",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    boxShadow: "0px 4px 6px rgba(67,97,238,0.3)",
    elevation: 4,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },

  // ========== CARD ==========
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 18,
    boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f1f3f5",
  },
  cardContent: {
    gap: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#212529",
    letterSpacing: -0.3,
  },
  email: {
    fontSize: 14,
    color: "#6c757d",
    marginBottom: 2,
  },
  phone: {
    fontSize: 14,
    color: "#4361ee",
    marginBottom: 10,
    fontWeight: "500",
  },
  cardButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 12,
  },
  editButton: {
    backgroundColor: "#4361ee",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 40,
    minWidth: 80,
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: "#ef233c",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 40,
    minWidth: 80,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },

  // ========== LISTA ==========
  list: {
    paddingBottom: 24,
    paddingTop: 8,
  },

  // ========== LOADING ==========
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#6c757d",
    fontWeight: "500",
  },

  // ========== LISTA VAZIA ==========
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  emptyText: {
    fontSize: 16,
    color: "#adb5bd",
    fontWeight: "500",
  },
});

export default styles;