export abstract class BaseFileAccess {
  public abstract combinePath(pathPieces: string[]): string
  public abstract applicationDataDirectory(): string
  public abstract musicDirectory(): string
  public abstract coverArtCacheFullPath(): string
  public abstract coverArtFullPath(artworkId: string): string
  public abstract getFilesInDirectoryAsync(directoryPath: string, continueOnError?: boolean, errors?: Error[]): Promise<string[]>
  public abstract getFilesInDirectory(directoryPath: string, continueOnError?: boolean, errors?: Error[]): string[]
  public abstract getDirectoriesInDirectoryAsync(directoryPath: string, continueOnError?: boolean, errors?: Error[]): Promise<string[]>
  public abstract getFileExtension(fileNameOrPath: string): string
  public abstract getFileName(fileNameOrPath: string): string
  public abstract getFileNameWithoutExtension(fileNameOrPath: string): string
  public abstract getPathWithoutExtension(filePath: string): string
  public abstract getDateModifiedInTicksAsync(fileOrDirectory: string): Promise<number>
  public abstract getDateCreatedInTicksAsync(fileOrDirectory: string): Promise<number>
  public abstract pathExists(pathToCheck: string): boolean
  public abstract getFileSizeInBytesAsync(filePath: string): Promise<number>
  public abstract createFullDirectoryPathIfDoesNotExist(directoryPath: string): void
  public abstract createFile(filePath: string): void
  public abstract getDirectoryPath(directoryOrFilePath: string): string
  public abstract deleteFileIfExistsAsync(filePath: string): Promise<void>
  public abstract deleteDirectoryRecursively(directoryPath: string): void
  public abstract renameFileOrDirectory(oldPath: string, newPath: string): void
  public abstract getDirectoryOrFileName(directoryOrFilePath: string): string
  public abstract getFileContentAsString(filePath: string): string
  public abstract getFileContentAsBufferAsync(filePath: string): Promise<Buffer>
  public abstract writeToFile(filePath: string, textToWrite: string): void
  public abstract copyFile(oldPath: string, newPath: string): void
  public abstract changeFileName(filePath: string, newFileName: string): string
  public abstract changeFolderName(folderPath: string, newFolderName: string): string
  public abstract isAbsolutePath(directoryOrFilePath: string): boolean
  public abstract generateFullPath(baseDirectoryPath: string, directoryOrFilePath: string): string
  public abstract readLinesAsync(filePath: string): Promise<string[]>
  public abstract appendTextToFileAsync(filePath: string, text: string): Promise<void>
  public abstract replaceTextInFileAsync(filePath: string, text: string): Promise<void>
  public abstract clearFileContentsAsync(filePath: string): Promise<void>
}
