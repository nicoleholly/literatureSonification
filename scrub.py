def main():
    source_file = "books/notes-from-underground.txt"
    target_file = "books/notes_scrubbed"

    s = open(source_file, 'r')
    t = open(target_file, 'w')

    countRecords = 0

    for line in s:
        currentLine = line.rstrip("\n").replace('"', "'")
        t.write(currentLine + ' ')
        countRecords += 1               

    s.close()
    t.close()

    print("File written. %d records. " % countRecords)

main()
           